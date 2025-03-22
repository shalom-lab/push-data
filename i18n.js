const i18n = {
    en: {
        selectTemplate: "Select Template",
        selectRepo: "Select Repository",
        submit: "Submit",
        loading: "Loading...",
        settings: "Settings",
        back: "Back",
        yes: "Yes",
        no: "No",
        templates: {
            title: "Template Management",
            import: "Import",
            export: "Export",
            save: "Save Templates",
            success: {
                import: "Templates imported successfully",
                save: "Templates saved successfully"
            },
            error: {
                format: "Template format error",
                import: "Import failed: "
            }
        },
        token: {
            title: "GitHub Token",
            placeholder: "Enter Token",
            save: "Update",
            reset: "Reset",
            confirmReset: "Are you sure you want to reset the token?",
            success: {
                update: "Token updated successfully",
                reset: "Token has been reset"
            },
            error: {
                required: "Please enter GitHub Token"
            },
            notice: "Token is stored locally in your browser. No privacy concerns."
        },
        language: {
            title: "Language Settings"
        },
        slogan: {
            subtitle: "Push data with ease"
        },
        labels: {
            selectRepo: "Select Repository:",
            selectTemplate: "Select Template:"
        },
        success: {
            submit: "Submitted successfully!"
        },
        error: {
            selectTemplate: "Please select a template first",
            selectRepo: "Please select a repository",
            loadRepos: "Failed to load repositories",
            required: "Please fill in",
            fieldRequired: "Please fill in {field}",
            accessDenied: "Permission denied. Your token does not have access to this resource. Please check your token permissions or choose another repository."
        },
        notice: {
            savePath: "Save Path",
            viewFields: "View Fields"
        },
        welcome: {
            greeting: "👋 Welcome to GitHub Data Push",
            tokenTip: "Please click the ⚙️ Settings button in the top right to configure your GitHub Token"
        }
    },
    zh: {
        selectTemplate: "请选择模板",
        selectRepo: "请选择仓库",
        submit: "提交",
        loading: "加载中...",
        settings: "设置",
        back: "返回",
        yes: "是",
        no: "否",
        templates: {
            title: "模板管理",
            import: "导入",
            export: "导出",
            save: "保存模板",
            success: {
                import: "模板导入成功",
                save: "模板保存成功"
            },
            error: {
                format: "模板格式错误",
                import: "导入失败："
            }
        },
        token: {
            title: "GitHub Token",
            placeholder: "输入 Token",
            save: "更新",
            reset: "重置",
            confirmReset: "确定要重置 Token 吗？",
            success: {
                update: "Token 更新成功",
                reset: "Token 已重置"
            },
            error: {
                required: "请输入 GitHub Token"
            },
            notice: "Token 保存在本地浏览器中，无需担心隐私问题。"
        },
        language: {
            title: "语言设置"
        },
        slogan: {
            subtitle: "轻松推数据"
        },
        labels: {
            selectRepo: "选择仓库:",
            selectTemplate: "选择模板:"
        },
        success: {
            submit: "提交成功！"
        },
        error: {
            selectTemplate: "请先选择一个模板",
            selectRepo: "请选择仓库",
            loadRepos: "加载仓库列表失败",
            required: "请填写",
            fieldRequired: "请填写{field}",
            accessDenied: "权限不足，无法访问该资源。请确保您的Token有足够权限或选择其他仓库。"
        },
        notice: {
            savePath: "保存路径",
            viewFields: "查看字段"
        },
        welcome: {
            greeting: "👋 欢迎使用 GitHub Data Push",
            tokenTip: "请先点击右上角 ⚙️ 设置按钮，配置您的 GitHub Token"
        }
    },
    ja: {
        slogan: {
            subtitle: "素早く記録・共有"
        },
        selectTemplate: "テンプレートを選択",
        selectRepo: "リポジトリを選択",
        submit: "送信",
        settings: "設定",
        back: "戻る",
        loading: "読み込み中...",
        yes: "はい",
        no: "いいえ",
        welcome: {
            greeting: "ようこそ！",
            tokenTip: "最初に設定でGitHub Tokenを設定してください"
        },
        token: {
            title: "GitHub Token",
            placeholder: "GitHub Tokenを入力",
            save: "保存",
            reset: "リセット",
            notice: "GitHubの設定でrepoスコープを持つトークンを生成してください",
            confirmReset: "トークンをリセットしてもよろしいですか？",
            success: {
                update: "トークンが更新されました",
                reset: "トークンがリセットされました"
            },
            error: {
                required: "トークンを入力してください"
            }
        },
        templates: {
            title: "テンプレート管理",
            import: "インポート",
            export: "エクスポート",
            save: "保存",
            success: {
                save: "テンプレートが保存されました",
                import: "テンプレートがインポートされました"
            },
            error: {
                format: "テンプレートの形式が無効です",
                import: "インポートに失敗しました："
            }
        },
        language: {
            title: "言語設定"
        },
        notice: {
            savePath: "保存パス",
            viewFields: "フィールドを表示"
        },
        error: {
            selectTemplate: "テンプレートを選択してください",
            selectRepo: "リポジトリを選択してください",
            fieldRequired: "{field}を入力してください",
            loadRepos: "リポジトリの読み込みに失敗しました",
            accessDenied: "権限がありません。トークンがこのリソースにアクセスできません。トークンの権限を確認するか、別のリポジトリを選択してください。"
        },
        success: {
            submit: "送信が完了しました"
        }
    },
    ko: {
        slogan: {
            subtitle: "빠른 기록 및 공유"
        },
        selectTemplate: "템플릿 선택",
        selectRepo: "저장소 선택",
        submit: "제출",
        settings: "설정",
        back: "뒤로",
        loading: "로딩 중...",
        yes: "예",
        no: "아니오",
        welcome: {
            greeting: "환영합니다!",
            tokenTip: "먼저 설정에서 GitHub Token을 구성해 주세요"
        },
        token: {
            title: "GitHub Token",
            placeholder: "GitHub Token 입력",
            save: "저장",
            reset: "초기화",
            notice: "GitHub 설정에서 repo 권한이 있는 토큰을 생성하세요",
            confirmReset: "토큰을 초기화하시겠습니까?",
            success: {
                update: "토큰이 업데이트되었습니다",
                reset: "토큰이 초기화되었습니다"
            },
            error: {
                required: "토큰을 입력해 주세요"
            }
        },
        templates: {
            title: "템플릿 관리",
            import: "가져오기",
            export: "내보내기",
            save: "저장",
            success: {
                save: "템플릿이 저장되었습니다",
                import: "템플릿을 가져왔습니다"
            },
            error: {
                format: "템플릿 형식이 잘못되었습니다",
                import: "가져오기 실패: "
            }
        },
        language: {
            title: "언어 설정"
        },
        notice: {
            savePath: "저장 경로",
            viewFields: "필드 보기"
        },
        error: {
            selectTemplate: "템플릿을 선택해 주세요",
            selectRepo: "저장소를 선택해 주세요",
            fieldRequired: "{field}을(를) 입력해 주세요",
            loadRepos: "저장소 목록을 불러오지 못했습니다",
            accessDenied: "권한이 거부되었습니다. 토큰이 이 리소스에 액세스할 수 없습니다. 토큰 권한을 확인하거나 다른 저장소를 선택하세요."
        },
        success: {
            submit: "제출되었습니다"
        }
    },
    fr: {
        slogan: {
            subtitle: "Enregistrement et partage rapides"
        },
        selectTemplate: "Sélectionner un modèle",
        selectRepo: "Sélectionner un dépôt",
        submit: "Soumettre",
        settings: "Paramètres",
        back: "Retour",
        loading: "Chargement...",
        yes: "Oui",
        no: "Non",
        welcome: {
            greeting: "Bienvenue !",
            tokenTip: "Veuillez d'abord configurer votre Token GitHub dans les paramètres"
        },
        token: {
            title: "Token GitHub",
            placeholder: "Entrez votre Token",
            save: "Enregistrer",
            reset: "Réinitialiser",
            notice: "Générez un token avec la portée repo dans les paramètres GitHub",
            confirmReset: "Êtes-vous sûr de vouloir réinitialiser le token ?",
            success: {
                update: "Token mis à jour avec succès",
                reset: "Token réinitialisé"
            },
            error: {
                required: "Veuillez entrer un Token"
            }
        },
        templates: {
            title: "Gestion des modèles",
            import: "Importer",
            export: "Exporter",
            save: "Enregistrer",
            success: {
                save: "Modèles enregistrés avec succès",
                import: "Modèles importés avec succès"
            },
            error: {
                format: "Format de modèle invalide",
                import: "Échec de l'importation : "
            }
        },
        language: {
            title: "Paramètres de langue"
        },
        notice: {
            savePath: "Chemin de sauvegarde",
            viewFields: "Voir les champs"
        },
        error: {
            selectTemplate: "Veuillez sélectionner un modèle",
            selectRepo: "Veuillez sélectionner un dépôt",
            fieldRequired: "Veuillez remplir {field}",
            loadRepos: "Échec du chargement des dépôts",
            accessDenied: "Autorisation refusée. Votre token n'a pas accès à cette ressource. Veuillez vérifier les permissions de votre token ou choisir un autre dépôt."
        },
        success: {
            submit: "Soumis avec succès"
        }
    },
    de: {
        slogan: {
            subtitle: "Schnelles Aufzeichnen und Teilen"
        },
        selectTemplate: "Vorlage auswählen",
        selectRepo: "Repository auswählen",
        submit: "Absenden",
        settings: "Einstellungen",
        back: "Zurück",
        loading: "Laden...",
        yes: "Ja",
        no: "Nein",
        welcome: {
            greeting: "Willkommen!",
            tokenTip: "Bitte konfigurieren Sie zuerst Ihren GitHub Token in den Einstellungen"
        },
        token: {
            title: "GitHub Token",
            placeholder: "Token eingeben",
            save: "Speichern",
            reset: "Zurücksetzen",
            notice: "Generieren Sie ein Token mit repo-Berechtigung in den GitHub-Einstellungen",
            confirmReset: "Möchten Sie den Token wirklich zurücksetzen?",
            success: {
                update: "Token erfolgreich aktualisiert",
                reset: "Token wurde zurückgesetzt"
            },
            error: {
                required: "Bitte geben Sie einen Token ein"
            }
        },
        templates: {
            title: "Vorlagenverwaltung",
            import: "Importieren",
            export: "Exportieren",
            save: "Speichern",
            success: {
                save: "Vorlagen erfolgreich gespeichert",
                import: "Vorlagen erfolgreich importiert"
            },
            error: {
                format: "Ungültiges Vorlagenformat",
                import: "Import fehlgeschlagen: "
            }
        },
        language: {
            title: "Spracheinstellungen"
        },
        notice: {
            savePath: "Speicherpfad",
            viewFields: "Felder anzeigen"
        },
        error: {
            selectTemplate: "Bitte wählen Sie eine Vorlage aus",
            selectRepo: "Bitte wählen Sie ein Repository aus",
            fieldRequired: "Bitte füllen Sie {field} aus",
            loadRepos: "Fehler beim Laden der Repositories",
            accessDenied: "Zugriff verweigert. Ihr Token hat keinen Zugriff auf diese Ressource. Bitte überprüfen Sie die Berechtigungen Ihres Tokens oder wählen Sie ein anderes Repository."
        },
        success: {
            submit: "Erfolgreich übermittelt"
        }
    },
    es: {
        slogan: {
            subtitle: "Registro y compartición rápidos"
        },
        selectTemplate: "Seleccionar plantilla",
        selectRepo: "Seleccionar repositorio",
        submit: "Enviar",
        settings: "Configuración",
        back: "Volver",
        loading: "Cargando...",
        yes: "Sí",
        no: "No",
        welcome: {
            greeting: "¡Bienvenido!",
            tokenTip: "Por favor, configure primero su Token de GitHub en la configuración"
        },
        token: {
            title: "Token de GitHub",
            placeholder: "Introducir Token",
            save: "Guardar",
            reset: "Restablecer",
            notice: "Genere un token con alcance repo en la configuración de GitHub",
            confirmReset: "¿Está seguro de que desea restablecer el token?",
            success: {
                update: "Token actualizado con éxito",
                reset: "Token restablecido"
            },
            error: {
                required: "Por favor, introduzca un Token"
            }
        },
        templates: {
            title: "Gestión de plantillas",
            import: "Importar",
            export: "Exportar",
            save: "Guardar",
            success: {
                save: "Plantillas guardadas con éxito",
                import: "Plantillas importadas con éxito"
            },
            error: {
                format: "Formato de plantilla inválido",
                import: "Error en la importación: "
            }
        },
        language: {
            title: "Configuración de idioma"
        },
        notice: {
            savePath: "Ruta de guardado",
            viewFields: "Ver campos"
        },
        error: {
            selectTemplate: "Por favor, seleccione una plantilla",
            selectRepo: "Por favor, seleccione un repositorio",
            fieldRequired: "Por favor, complete {field}",
            loadRepos: "Error al cargar los repositorios",
            accessDenied: "Permiso denegado. Su token no tiene acceso a este recurso. Verifique los permisos de su token o elija otro repositorio."
        },
        success: {
            submit: "Enviado con éxito"
        }
    },
    it: {
        slogan: {
            subtitle: "Registrazione e condivisione rapida"
        },
        selectTemplate: "Seleziona modello",
        selectRepo: "Seleziona repository",
        submit: "Invia",
        settings: "Impostazioni",
        back: "Indietro",
        loading: "Caricamento...",
        yes: "Sì",
        no: "No",
        welcome: {
            greeting: "Benvenuto!",
            tokenTip: "Per favore, configura prima il tuo Token GitHub nelle impostazioni"
        },
        token: {
            title: "Token GitHub",
            placeholder: "Inserisci Token",
            save: "Salva",
            reset: "Reimposta",
            notice: "Genera un token con ambito repo nelle impostazioni GitHub",
            confirmReset: "Sei sicuro di voler reimpostare il token?",
            success: {
                update: "Token aggiornato con successo",
                reset: "Token reimpostato"
            },
            error: {
                required: "Per favore, inserisci un Token"
            }
        },
        templates: {
            title: "Gestione modelli",
            import: "Importa",
            export: "Esporta",
            save: "Salva",
            success: {
                save: "Modelli salvati con successo",
                import: "Modelli importati con successo"
            },
            error: {
                format: "Formato modello non valido",
                import: "Importazione fallita: "
            }
        },
        language: {
            title: "Impostazioni lingua"
        },
        notice: {
            savePath: "Percorso di salvataggio",
            viewFields: "Visualizza campi"
        },
        error: {
            selectTemplate: "Seleziona un modello",
            selectRepo: "Seleziona un repository",
            fieldRequired: "Compila {field}",
            loadRepos: "Errore nel caricamento dei repository",
            accessDenied: "Permesso negato. Il tuo token non ha accesso a questa risorsa. Verifica i permessi del tuo token o scegli un altro repository."
        },
        success: {
            submit: "Inviato con successo"
        }
    },
    pt: {
        slogan: {
            subtitle: "Registro e compartilhamento rápido"
        },
        selectTemplate: "Selecionar modelo",
        selectRepo: "Selecionar repositório",
        submit: "Enviar",
        settings: "Configurações",
        back: "Voltar",
        loading: "Carregando...",
        yes: "Sim",
        no: "Não",
        welcome: {
            greeting: "Bem-vindo!",
            tokenTip: "Por favor, configure primeiro seu Token GitHub nas configurações"
        },
        token: {
            title: "Token GitHub",
            placeholder: "Inserir Token",
            save: "Salvar",
            reset: "Redefinir",
            notice: "Gere um token com escopo repo nas configurações do GitHub",
            confirmReset: "Tem certeza que deseja redefinir o token?",
            success: {
                update: "Token atualizado com sucesso",
                reset: "Token redefinido"
            },
            error: {
                required: "Por favor, insira um Token"
            }
        },
        templates: {
            title: "Gerenciamento de modelos",
            import: "Importar",
            export: "Exportar",
            save: "Salvar",
            success: {
                save: "Modelos salvos com sucesso",
                import: "Modelos importados com sucesso"
            },
            error: {
                format: "Formato de modelo inválido",
                import: "Falha na importação: "
            }
        },
        language: {
            title: "Configurações de idioma"
        },
        notice: {
            savePath: "Caminho de salvamento",
            viewFields: "Ver campos"
        },
        error: {
            selectTemplate: "Selecione um modelo",
            selectRepo: "Selecione um repositório",
            fieldRequired: "Preencha {field}",
            loadRepos: "Erro ao carregar repositórios",
            accessDenied: "Permissão negada. Seu token não tem acesso a este recurso. Verifique as permissões do seu token ou escolha outro repositório."
        },
        success: {
            submit: "Enviado com sucesso"
        }
    },
    ru: {
        slogan: {
            subtitle: "Быстрая запись и обмен"
        },
        selectTemplate: "Выбрать шаблон",
        selectRepo: "Выбрать репозиторий",
        submit: "Отправить",
        settings: "Настройки",
        back: "Назад",
        loading: "Загрузка...",
        yes: "Да",
        no: "Нет",
        welcome: {
            greeting: "Добро пожаловать!",
            tokenTip: "Пожалуйста, сначала настройте ваш GitHub Token в настройках"
        },
        token: {
            title: "GitHub Token",
            placeholder: "Введите Token",
            save: "Сохранить",
            reset: "Сбросить",
            notice: "Создайте токен с областью repo в настройках GitHub",
            confirmReset: "Вы уверены, что хотите сбросить токен?",
            success: {
                update: "Токен успешно обновлен",
                reset: "Токен сброшен"
            },
            error: {
                required: "Пожалуйста, введите Token"
            }
        },
        templates: {
            title: "Управление шаблонами",
            import: "Импорт",
            export: "Экспорт",
            save: "Сохранить",
            success: {
                save: "Шаблоны успешно сохранены",
                import: "Шаблоны успешно импортированы"
            },
            error: {
                format: "Неверный формат шаблона",
                import: "Ошибка импорта: "
            }
        },
        language: {
            title: "Настройки языка"
        },
        notice: {
            savePath: "Путь сохранения",
            viewFields: "Просмотр полей"
        },
        error: {
            selectTemplate: "Выберите шаблон",
            selectRepo: "Выберите репозиторий",
            fieldRequired: "Заполните поле {field}",
            loadRepos: "Ошибка загрузки репозиториев",
            accessDenied: "Доступ запрещен. Ваш токен не имеет доступа к этому ресурсу. Пожалуйста, проверьте разрешения вашего токена или выберите другой репозиторий."
        },
        success: {
            submit: "Успешно отправлено"
        }
    },
    ar: {
        slogan: {
            subtitle: "تسجيل ومشاركة سريعة"
        },
        selectTemplate: "اختر القالب",
        selectRepo: "اختر المستودع",
        submit: "إرسال",
        settings: "الإعدادات",
        back: "رجوع",
        loading: "جاري التحميل...",
        yes: "نعم",
        no: "لا",
        welcome: {
            greeting: "مرحباً!",
            tokenTip: "الرجاء تكوين رمز GitHub الخاص بك في الإعدادات أولاً"
        },
        token: {
            title: "رمز GitHub",
            placeholder: "أدخل الرمز",
            save: "حفظ",
            reset: "إعادة تعيين",
            notice: "قم بإنشاء رمز مع نطاق repo في إعدادات GitHub",
            confirmReset: "هل أنت متأكد من رغبتك في إعادة تعيين الرمز؟",
            success: {
                update: "تم تحديث الرمز بنجاح",
                reset: "تم إعادة تعيين الرمز"
            },
            error: {
                required: "الرجاء إدخال الرمز"
            }
        },
        templates: {
            title: "إدارة القوالب",
            import: "استيراد",
            export: "تصدير",
            save: "حفظ",
            success: {
                save: "تم حفظ القوالب بنجاح",
                import: "تم استيراد القوالب بنجاح"
            },
            error: {
                format: "تنسيق القالب غير صالح",
                import: "فشل الاستيراد: "
            }
        },
        language: {
            title: "إعدادات اللغة"
        },
        notice: {
            savePath: "مسار الحفظ",
            viewFields: "عرض الحقول"
        },
        error: {
            selectTemplate: "الرجاء اختيار قالب",
            selectRepo: "الرجاء اختيار مستودع",
            fieldRequired: "الرجاء ملء {field}",
            loadRepos: "فشل في تحميل المستودعات",
            accessDenied: "الإذن مرفوض. رمز الدخول الخاص بك لا يملك وصولاً إلى هذا المورد. يرجى التحقق من صلاحيات الرمز أو اختيار مستودع آخر."
        },
        success: {
            submit: "تم الإرسال بنجاح"
        }
    }
};