let TEMPLATES = {
    "my-project": {
        name: "🚀 我的项目",
        fields: {
            title: { type: 'text', label: '项目名称' },
            link: { type: 'text', label: '项目链接' },
            keywords: { type: 'text', label: '关键词' }
        },
        filename: 'data-raw/projects.json'
    },
    field_types: {
        name: "🔎 模板示例",
        fields: {
            text_example: { 
                type: 'text', 
                label: '文本输入' 
            },
            textarea_example: { 
                type: 'textarea', 
                label: '多行文本' 
            },
            select_example: { 
                type: 'select', 
                label: '下拉选择',
                options: ['选项A', '选项B', '选项C']
            },
            date_example: { 
                type: 'date', 
                label: '日期选择' 
            },
            number_example: { 
                type: 'number', 
                label: '数字输入' 
            }
        },
        filename: 'data-raw/examples.json'
    }
};

let currentTemplate = null;
let currentLang = 'zh'; // 默认中文

// 获取浏览器语言并设置默认语言
function detectLanguage() {
    const browserLang = navigator.language.toLowerCase();
    return browserLang.startsWith('zh') ? 'zh' : 'en';
}

// 获取翻译文本
function t(key, section = null) {
    const keys = key.split('.');
    let value = i18n[currentLang];
    
    if (section) {
        value = value[section];
    }
    
    for (const k of keys) {
        value = value[k];
        if (!value) return key;
    }
    return value;
}

// 切换语言
async function toggleLanguage() {
    currentLang = currentLang === 'zh' ? 'en' : 'zh';
    await chrome.storage.local.set({ language: currentLang });
    updateLanguage();
}

// 更新页面上的所有文本
function updateLanguage() {
    // 更新 Logo 标题
    const logoSubtitle = document.querySelector('.logo-title small');
    if (logoSubtitle) {
        logoSubtitle.textContent = t('slogan.subtitle');
    }

    // 更新模板选择器标签和选项
    const templateSelect = document.getElementById('templateSelect');
    if (templateSelect) {
        const selectedValue = templateSelect.value;
        templateSelect.innerHTML = `<option value="">${t('selectTemplate')}</option>`;
        Object.entries(TEMPLATES).forEach(([key, template]) => {
            const option = document.createElement('option');
            option.value = key;
            option.textContent = template.name;
            templateSelect.appendChild(option);
        });
        templateSelect.value = selectedValue;
        
        // 更新模板选择器的标签文本
        const templateLabel = templateSelect.parentElement.querySelector('label');
        if (templateLabel) {
            templateLabel.textContent = t('labels.selectTemplate');
        }
    }

    // 更新仓库选择器标签和选项
    const repoList = document.getElementById('repoList');
    if (repoList) {
        const selectedValue = repoList.value;
        if (!selectedValue) {
            repoList.options[0].textContent = t('selectRepo');
        }
        repoList.value = selectedValue;
        
        // 更新仓库选择器的标签文本
        const repoLabel = repoList.parentElement.querySelector('label');
        if (repoLabel) {
            repoLabel.textContent = t('labels.selectRepo');
        }
    }

    // 更新提交按钮
    const submitBtn = document.getElementById('submit');
    if (submitBtn) {
        submitBtn.textContent = t('submit');
    }

    // 更新设置按钮
    const settingsBtn = document.getElementById('openSettings');
    if (settingsBtn) {
        settingsBtn.textContent = t('settings');
    }

    // 更新返回按钮
    const backBtn = document.getElementById('backToMain');
    if (backBtn) {
        backBtn.textContent = t('back');
    }

    // 更新Token相关文本
    const noTokenTip = document.getElementById('noTokenTip');
    if (noTokenTip) {
        noTokenTip.innerHTML = `
            <p>${t('welcome.greeting')}</p>
            <p>${t('welcome.tokenTip')}</p>
        `;
    }

    const tokenTitle = document.querySelector('.token-section .settings-item-header h4');
    if (tokenTitle) {
        tokenTitle.textContent = t('token.title');
    }

    const tokenInput = document.getElementById('settingsToken');
    if (tokenInput) {
        tokenInput.placeholder = t('token.placeholder');
    }

    const saveTokenBtn = document.getElementById('settingsSaveToken');
    if (saveTokenBtn) {
        saveTokenBtn.textContent = t('token.save');
    }

    const resetTokenBtn = document.getElementById('settingsResetToken');
    if (resetTokenBtn) {
        resetTokenBtn.textContent = t('token.reset');
    }

    // 更新 Token 提示文本
    const tokenNotice = document.querySelector('.token-notice');
    if (tokenNotice) {
        tokenNotice.textContent = t('token.notice');
    }

    // 更新模板管理标题
    const templateManagementTitle = document.querySelector('.settings-item-header h4');
    if (templateManagementTitle && templateManagementTitle.parentElement.parentElement.querySelector('#templatesEditor')) {
        templateManagementTitle.textContent = t('templates.title');
    }

    // 更新语言设置标题
    const languageTitle = document.querySelector('.language-select-group').previousElementSibling.querySelector('h4');
    if (languageTitle) {
        languageTitle.textContent = t('language.title');
    }

    // 更新设置面板中的文本
    document.getElementById('importTemplates').textContent = t('templates.import');
    document.getElementById('exportTemplates').textContent = t('templates.export');
    document.getElementById('saveTemplates').textContent = t('templates.save');

    // 如果当前有模板表单，重新生成它以更新标签
    if (currentTemplate) {
        generateFormFields(Object.keys(TEMPLATES).find(key => TEMPLATES[key] === currentTemplate));
    }
}

// 检查是否已设置 token
async function checkToken() {
    const result = await chrome.storage.local.get(['github_token']);
    const mainContent = document.getElementById('mainContent');
    const noTokenTip = document.getElementById('noTokenTip');

    if (result.github_token) {
        mainContent.style.display = 'block';
        noTokenTip.style.display = 'none';
        loadRepos();
    } else {
        mainContent.style.display = 'none';
        noTokenTip.style.display = 'block';
    }
}

// 生成表单字段
function generateFormFields(templateName) {
    currentTemplate = TEMPLATES[templateName];
    const formFields = document.getElementById('formFields');
    formFields.innerHTML = '';

    // 添加文件路径提示框
    const pathNotice = document.createElement('div');
    pathNotice.className = 'notice';
    pathNotice.style.marginBottom = '20px';
    pathNotice.style.padding = '16px';
    pathNotice.style.backgroundColor = '#f8f9fa';
    pathNotice.style.border = '1px solid #e1e4e8';
    pathNotice.style.borderRadius = '6px';
    pathNotice.style.fontSize = '13px';
    pathNotice.style.lineHeight = '1.4';
    pathNotice.style.boxShadow = '0 1px 2px rgba(0, 0, 0, 0.05)';

    // 获取所有字段名并添加类型信息
    const fieldInfo = Object.entries(currentTemplate.fields)
        .map(([key, field]) => {
            let typeInfo = field.type;
            if (field.type === 'select') {
                typeInfo += `(${field.options.length})`;
            }
            return `${key}: ${typeInfo}`;
        })
        .join('\n');
    
    pathNotice.innerHTML = `
        <div style="margin-bottom: 12px;">
            <div style="
                color: #24292e;
                font-weight: 600;
                font-size: 12px;
                margin-bottom: 4px;
                display: flex;
                align-items: center;
                gap: 4px;
            ">
                <span style="opacity: 0.8;">📁</span> ${t('notice.savePath')}
            </div>
            <div style="
                background: #fff;
                padding: 8px 12px;
                border-radius: 4px;
                border: 1px solid #eaecef;
                font-family: ui-monospace, SFMono-Regular, SF Mono, Menlo, Consolas, Liberation Mono, monospace;
                font-size: 12px;
                color: #444d56;
                word-break: break-all;
                max-width: 100%;
                overflow-wrap: break-word;
                text-align: left;
            ">${currentTemplate.filename}</div>
        </div>
        <details style="cursor: pointer;">
            <summary style="
                color: #24292e;
                font-weight: 600;
                font-size: 12px;
                margin-bottom: 8px;
                user-select: none;
                display: flex;
                align-items: center;
                gap: 4px;
            ">
                <span style="opacity: 0.8;">🔑</span> ${t('notice.viewFields')}
            </summary>
            <div style="
                background: #fff;
                padding: 8px 12px;
                border-radius: 4px;
                border: 1px solid #eaecef;
                font-family: ui-monospace, SFMono-Regular, SF Mono, Menlo, Consolas, Liberation Mono, monospace;
                font-size: 12px;
                color: #444d56;
                line-height: 1.6;
                white-space: pre;
                text-align: left;
            ">${fieldInfo}</div>
        </details>
    `;
    formFields.appendChild(pathNotice);

    Object.entries(currentTemplate.fields).forEach(([fieldName, field]) => {
        const div = document.createElement('div');
        div.className = 'form-group';
        
        const label = document.createElement('label');
        label.textContent = field.label;
        div.appendChild(label);

        let input;
        if (field.type === 'textarea') {
            input = document.createElement('textarea');
            input.rows = 4;
        } else if (field.type === 'select' && Array.isArray(field.options)) {
            input = document.createElement('select');
            // 添加一个默认选项
            const defaultOption = document.createElement('option');
            defaultOption.value = '';
            defaultOption.textContent = `请选择${field.label}`;
            input.appendChild(defaultOption);
            // 添加其他选项
            field.options.forEach(option => {
                const opt = document.createElement('option');
                opt.value = option;
                opt.textContent = option;
                input.appendChild(opt);
            });
        } else {
            input = document.createElement('input');
            input.type = field.type || 'text';
        }
        
        input.id = fieldName;
        div.appendChild(input);
        formFields.appendChild(div);
    });
}

// 修改 DOMContentLoaded 事件处理
document.addEventListener('DOMContentLoaded', async () => {
    // 加载保存的语言设置
    const settings = await chrome.storage.local.get(['language']);
    currentLang = settings.language || detectLanguage();
    
    // 设置语言选择器的值
    const languageSelect = document.getElementById('languageSelect');
    if (languageSelect) {
        languageSelect.value = currentLang;
        languageSelect.addEventListener('change', async (e) => {
            currentLang = e.target.value;
            await chrome.storage.local.set({ language: currentLang });
            updateLanguage();
            // 重新加载仓库列表以更新文本
            await loadRepos();
        });
    }
    
    // 先从本地存储加载模板
    await loadSavedTemplates();
    
    // 初始化模板选择器
    initializeTemplateSelect();
    
    // 检查 token 状态
    await checkToken();
    
    // 初始化设置面板
    initializeSettings();

    // 更新所有文本
    updateLanguage();

    // 显示主界面
    document.getElementById('main').style.display = 'block';
});

// 将模板选择相关的代码封装到一个函数中
function initializeTemplateSelect() {
    // 更新选择列表
    updateTemplateSelect();
    
    // 绑定选择事件
    const templateSelect = document.getElementById('templateSelect');
    if (templateSelect) {
        templateSelect.addEventListener('change', function(e) {
            const templateName = e.target.value;
            if (templateName) {
                generateFormFields(templateName);
            } else {
                document.getElementById('formFields').innerHTML = '';
                currentTemplate = null;
            }
        });
    } else {
        console.error('模板选择元素未找到');
    }
}

// 更新模板选择列表
function updateTemplateSelect() {
    const templateSelect = document.getElementById('templateSelect');
    if (!templateSelect) {
        console.error('找不到模板选择元素');
        return;
    }
    
    // 清空现有选项
    templateSelect.innerHTML = '<option value="">请选择模板</option>';
    
    // 添加新选项
    Object.entries(TEMPLATES).forEach(([key, template]) => {
        const option = document.createElement('option');
        option.value = key;
        option.textContent = template.name;
        templateSelect.appendChild(option);
    });
    
    // 调试日志
    console.log('模板列表已更新:', {
        templates: TEMPLATES,
        selectOptions: templateSelect.innerHTML
    });
}

// 生成更明确的文件名
function generateFilename(formData) {
    const date = new Date().toISOString().split('T')[0];  // 获取当前日期 YYYY-MM-DD
    const sanitizedTitle = formData.title
        ?.toLowerCase()
        .replace(/[^a-z0-9]+/g, '-')  // 非字母数字替换为横线
        .replace(/^-+|-+$/g, '');     // 删除首尾横线
    
    return `data/${date}-${sanitizedTitle}.json`;  // 例如: data/2024-03-20-my-title.json
}

async function appendToJsonFile(repoFullName, formData, token) {
    const filename = currentTemplate.filename;
    
    try {
        let existingData = [];
        let fileData = null;
        let checkResponse = null;
        
        try {
            checkResponse = await fetch(
                `https://api.github.com/repos/${repoFullName}/contents/${filename}`,
                {
                    headers: {
                        'Authorization': `token ${token}`,
                    }
                }
            );
            
            if (checkResponse.ok) {
                fileData = await checkResponse.json();
                // 使用 TextDecoder 解码 base64 内容
                const decoder = new TextDecoder('utf-8');
                const bytes = Uint8Array.from(atob(fileData.content), c => c.charCodeAt(0));
                const content = decoder.decode(bytes);
                try {
                    existingData = JSON.parse(content);
                    if (!Array.isArray(existingData)) {
                        console.log('现有文件不是数组格式，将重置为空数组');
                        existingData = [];
                    }
                } catch (e) {
                    console.log('解析现有文件失败，将重置为空数组');
                    existingData = [];
                }
            } else if (checkResponse.status === 404) {
                console.log('文件不存在，将创建新文件');
                existingData = [];
            } else {
                throw new Error('检查文件状态失败');
            }
        } catch (error) {
            if (error.message !== '文件不存在，将创建新文件') {
                console.warn('读取文件时出错:', error);
            }
            existingData = [];
        }

        const newEntry = {
            ...formData,
            timestamp: new Date().toISOString()
        };
        existingData.push(newEntry);

        // 使用 TextEncoder 进行 UTF-8 编码
        const encoder = new TextEncoder();
        const jsonString = JSON.stringify(existingData, null, 2);
        const bytes = encoder.encode(jsonString);
        const base64Content = btoa(String.fromCharCode(...bytes));

        const response = await fetch(
            `https://api.github.com/repos/${repoFullName}/contents/${filename}`,
            {
                method: 'PUT',
                headers: {
                    'Authorization': `token ${token}`,
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    message: `Add new entry via Chrome extension`,
                    content: base64Content,
                    sha: fileData?.sha
                })
            }
        );

        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.message || '提交失败');
        }

        return true;
    } catch (error) {
        console.error('提交失败:', error);
        throw error;
    }
}

// 修改 showToast 函数以支持翻译
function showToast(message, type = 'success') {
    // 检查是否是预定义消息的key
    const section = type === 'success' ? 'success' : 'error';
    const translatedMessage = i18n[currentLang][section]?.[message] || message;
    
    // 移除现有的 toast
    const existingToast = document.querySelector('.toast');
    if (existingToast) {
        existingToast.remove();
    }

    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    toast.textContent = translatedMessage;
    document.body.appendChild(toast);

    // 强制重绘
    toast.offsetHeight;

    // 添加 show 类来触发动画
    toast.classList.add('show');

    setTimeout(() => {
        toast.classList.remove('show');
        setTimeout(() => toast.remove(), 300); // 等待淡出动画完成后移除
    }, 3000);
}

// 修改 showConfirmToast 函数以支持翻译
function showConfirmToast(message, onConfirm) {
    const translatedMessage = i18n[currentLang].confirmReset || message;
    const toast = document.createElement('div');
    toast.className = 'toast confirm';
    
    const messageDiv = document.createElement('div');
    messageDiv.textContent = translatedMessage;
    
    const buttonDiv = document.createElement('div');
    buttonDiv.className = 'confirm-buttons';
    
    const confirmButton = document.createElement('button');
    confirmButton.textContent = t('yes');
    confirmButton.onclick = () => {
        onConfirm();
        toast.remove();
    };
    
    const cancelButton = document.createElement('button');
    cancelButton.textContent = t('no');
    cancelButton.onclick = () => toast.remove();
    
    buttonDiv.appendChild(confirmButton);
    buttonDiv.appendChild(cancelButton);
    
    toast.appendChild(messageDiv);
    toast.appendChild(buttonDiv);
    document.body.appendChild(toast);
}

// 修改 submit 按钮事件处理
document.getElementById('submit').addEventListener('click', async () => {
    if (!currentTemplate) {
        showToast('请先选择一个模板', 'error');
        return;
    }

    const repoFullName = document.getElementById('repoList').value;
    if (!repoFullName) {
        showToast('请选择仓库', 'error');
        return;
    }

    // 收集表单数据
    const formData = {};
    for (const fieldName of Object.keys(currentTemplate.fields)) {
        const value = document.getElementById(fieldName).value;
        if (!value) {
            showToast(`请填写${currentTemplate.fields[fieldName].label}`, 'error');
            return;
        }
        formData[fieldName] = value;
    }

    try {
        const settings = await chrome.storage.local.get(['github_token']);
        
        // 显示加载状态
        const submitButton = document.getElementById('submit');
        const originalText = submitButton.textContent;
        submitButton.disabled = true;
        submitButton.classList.add('loading');
        submitButton.textContent = '提交中';

        await appendToJsonFile(repoFullName, formData, settings.github_token);
        
        showToast('提交成功！');
            // 清空表单
            Object.keys(currentTemplate.fields).forEach(fieldName => {
                document.getElementById(fieldName).value = '';
            });
    } catch (error) {
        showToast(error.message, 'error');
    } finally {
        // 恢复按钮状态
        const submitButton = document.getElementById('submit');
        submitButton.disabled = false;
        submitButton.classList.remove('loading');
        submitButton.textContent = originalText;
    }
});

// 加载仓库列表
async function loadRepos() {
    const repoList = document.getElementById('repoList');
    repoList.innerHTML = `<option value="">${t('loading')}</option>`;

    try {
        const settings = await chrome.storage.local.get(['github_token']);
        const response = await fetch('https://api.github.com/user/repos', {
            headers: {
                'Authorization': `token ${settings.github_token}`,
                'Accept': 'application/vnd.github.v3+json'
            }
        });

        if (!response.ok) {
            throw new Error(t('error.loadRepos'));
        }

        const repos = await response.json();
        repoList.innerHTML = `<option value="">${t('selectRepo')}</option>`;
        
        repos
            .sort((a, b) => a.full_name.localeCompare(b.full_name))
            .forEach(repo => {
                const option = document.createElement('option');
                option.value = repo.full_name;
                option.textContent = repo.full_name;
                repoList.appendChild(option);
            });
    } catch (error) {
        console.error('Error loading repos:', error);
        repoList.innerHTML = `<option value="">${t('error.loadRepos')}</option>`;
        showToast(t('error.loadRepos'), 'error');
    }
}

// 设置面板相关功能
function initializeSettings() {
    const mainDiv = document.getElementById('main');
    const settingsDiv = document.getElementById('settings');
    const templatesEditor = document.getElementById('templatesEditor');

    // 打开设置
    document.getElementById('openSettings').addEventListener('click', () => {
        mainDiv.style.display = 'none';
        settingsDiv.style.display = 'block';
        // 加载当前模板到编辑器
        templatesEditor.value = JSON.stringify(TEMPLATES, null, 2);
    });

    // 返回主界面
    document.getElementById('backToMain').addEventListener('click', () => {
        settingsDiv.style.display = 'none';
        mainDiv.style.display = 'block';
    });

    // 保存模板
    document.getElementById('saveTemplates').addEventListener('click', async () => {
        try {
            const newTemplates = JSON.parse(templatesEditor.value);
            if (Object.keys(newTemplates).length === 0) {
                await chrome.storage.local.set({ templates: newTemplates });
                TEMPLATES = {}; 
                updateTemplateSelect();
                showToast(t('templates.success.save'));
            } else if (validateTemplates(newTemplates)) {
                await chrome.storage.local.set({ templates: newTemplates });
                TEMPLATES = { ...newTemplates };
                updateTemplateSelect();
                showToast(t('templates.success.save'));
            }
        } catch (error) {
            showToast(t('templates.error.format') + ': ' + error.message, 'error');
        }
    });

    // 导出模板
    document.getElementById('exportTemplates').addEventListener('click', () => {
        // 获取当前日期，格式为 YYYY-MM-DD
        const today = new Date().toISOString().split('T')[0];
        const blob = new Blob([templatesEditor.value], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `${today}-templates.json`;
        a.click();
        URL.revokeObjectURL(url);
    });

    // 导入模板
    document.getElementById('importTemplates').addEventListener('click', () => {
        document.getElementById('importTemplatesFile').click();
    });

    document.getElementById('importTemplatesFile').addEventListener('change', (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = async (e) => {
                try {
                    const templates = JSON.parse(e.target.result);
                    if (validateTemplates(templates)) {
                        templatesEditor.value = JSON.stringify(templates, null, 2);
                        showToast(t('templates.success.import'));
                    }
                } catch (error) {
                    showToast(t('templates.error.import') + error.message, 'error');
                }
            };
            reader.readAsText(file);
        }
    });

    // Token 管理
    document.getElementById('settingsSaveToken').addEventListener('click', async () => {
        const token = document.getElementById('settingsToken').value.trim();
        if (token) {
            try {
                await chrome.storage.local.set({ github_token: token });
                showToast(t('token.success.update'));
                document.getElementById('settingsToken').value = '';
                settingsDiv.style.display = 'none';
                mainDiv.style.display = 'block';
                await checkToken();
            } catch (error) {
                showToast(error.message, 'error');
            }
        } else {
            showToast(t('token.error.required'), 'error');
        }
    });

    // 修改重置 Token 的代码
    document.getElementById('settingsResetToken').addEventListener('click', () => {
        showConfirmToast(t('token.confirmReset'), async () => {
            await chrome.storage.local.remove('github_token');
            showToast(t('token.success.reset'));
            settingsDiv.style.display = 'none';
            mainDiv.style.display = 'block';
            await checkToken();
        });
    });
}

// 验证模板格式
function validateTemplates(templates) {
    for (const [key, template] of Object.entries(templates)) {
        if (!template.name || typeof template.name !== 'string') {
            throw new Error(`模板 ${key} 缺少 name 属性`);
        }
        if (!template.fields || typeof template.fields !== 'object') {
            throw new Error(`模板 ${key} 缺少 fields 属性`);
        }
        if (!template.filename || typeof template.filename !== 'string') {
            throw new Error(`模板 ${key} 缺少 filename 属性`);
        }
    }
    return true;
}

// 修改模板加载函数
async function loadSavedTemplates() {
    const result = await chrome.storage.local.get(['templates']);
    if (result.templates !== undefined) {
        TEMPLATES = { ...result.templates };
    }
} 