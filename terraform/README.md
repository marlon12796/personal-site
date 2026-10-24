# Terraform Infrastructure — AWS SES Contact Service

Esta carpeta gestiona la infraestructura como código (IaC) en AWS para el servicio de envío de correos del portafolio.

## Estructura

```
terraform/
├── modules/
│   └── ses/                        # Módulo reutilizable de AWS SES e IAM
│       ├── main.tf
│       ├── variables.tf
│       └── outputs.tf
└── environments/
    └── prod/                       # Entorno de Producción
        ├── main.tf
        ├── variables.tf
        ├── outputs.tf
        └── terraform.tfvars.example
```

## Recursos que aprovisiona:
1. **Identidades SES (`aws_ses_email_identity`)**: Registra los correos de contacto en AWS SES.
2. **Usuario IAM dedicado (`aws_iam_user`)**: `portfolio-ses-mailer-prod`.
3. **Política de menor privilegio (`aws_iam_user_policy`)**: Permite únicamente `ses:SendEmail` y `ses:SendRawEmail`.
4. **Credenciales de acceso (`aws_iam_access_key`)**: Genera el `Access Key` y `Secret Key` para el archivo `.env`.

---

## Cómo desplegar

### 1. Requisitos:
* Tener [Terraform CLI](https://developer.hashicorp.com/terraform/downloads) instalado.
* Tener credenciales de AWS configuradas en tu terminal (`aws configure`).

### 2. Ejecución:

```bash
cd terraform/environments/prod

# Copiar variables de ejemplo si deseas personalizar correos
cp terraform.tfvars.example terraform.tfvars

# Inicializar proveedores y módulos
terraform init

# Planificar
terraform plan

# Aplicar
terraform apply
```

### 3. Verificación de correos en AWS SES:
AWS enviará un correo de confirmación de Amazon SES a cada dirección registrada. Abre tu bandeja de entrada y haz clic en el enlace para verificar.

### 4. Obtener las credenciales para tu `.env`:

```bash
# Obtener Access Key ID
terraform output ses_access_key_id

# Obtener Secret Access Key (es sensible)
terraform output -raw ses_secret_access_key
```

Pega esos valores en tu `.env` de Next.js:
```env
AWS_REGION=us-east-1
AWS_ACCESS_KEY_ID=<VALOR_OUTPUT>
AWS_SECRET_ACCESS_KEY=<VALOR_OUTPUT>
AWS_SES_FROM_EMAIL=fabrisio021@gmail.com
CONTACT_EMAIL=fabrisio021@gmail.com
```
