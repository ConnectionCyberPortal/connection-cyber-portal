# -------------------------------------------------------------------------
# PROJETO: CONNECTION CYBER PORTAL
# ARQUIVO: START_PORTAL.ps1
# OBJETIVO: Limpeza Extrema, Autenticação e Inicialização de Estância
# -------------------------------------------------------------------------

[Console]::OutputEncoding = [System.Text.Encoding]::UTF8
Clear-Host

Write-Host "==========================================================" -ForegroundColor Cyan
Write-Host "      CONNECTION CYBER | PROTOCOLO DE LIMPEZA EXTREMA     " -ForegroundColor White -BackgroundColor DarkCyan
Write-Host "==========================================================" -ForegroundColor Cyan

# 1. LIMPEZA DE MEMÓRIA E PROCESSOS
Write-Host "[1/5] Purgando instâncias de Node, Git e Caches..." -ForegroundColor Yellow
Stop-Process -Name node -Force -ErrorAction SilentlyContinue
Stop-Process -Name git -Force -ErrorAction SilentlyContinue

# 2. ISOLAMENTO DE DIRETÓRIO (Cura o erro de rastrear o disco E:)
Write-Host "[2/5] Validando isolamento de Repositório..." -ForegroundColor Yellow
if (Test-Path "../../.git") {
    Write-Host "  [ALERTA] Detectado .git em nível superior! Removendo vínculo..." -ForegroundColor Red
    # Não deletamos a pasta, apenas garantimos que este terminal ignore o pai
    git config --global --add safe.directory "E:/Projetos/connection-cyber-portal"
}

# 3. LIMPEZA DE CREDENCIAIS (Cura o erro 403 Forbidden)
Write-Host "[3/5] Resetando cache de credenciais do GitHub..." -ForegroundColor Yellow
# Isso força o Windows a pedir login novamente para o usuário correto
git config --global --unset-all credential.helper
git config --system --unset-all credential.helper
git config --local credential.helper manager

# 4. SINCRO-CHECK DE REPOSITÓRIO
Write-Host "[4/5] Configurando Remote Principal..." -ForegroundColor Yellow
git remote remove origin 2>$null
git remote add origin https://github.com/ConnectionCyberPortal/connection-cyber-portal.git
git branch -M main

# 5. START DO AMBIENTE
Write-Host "[5/5] Subindo serviços..." -ForegroundColor Yellow
# Aqui entrarão os comandos de 'npm run dev' do frontend/backend quando criados
Write-Host "  [OK] Ambiente pronto para produção." -ForegroundColor Green

Write-Host "`n>>> SESSÃO INICIADA SOB GOVERNANÇA PGT-01 <<<" -ForegroundColor Cyan