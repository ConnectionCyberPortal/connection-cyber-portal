/**
 * CONNECTION CYBER PORTAL | RBAC SYSTEM
 * -------------------------------------------------------------------------
 * PROJETO: CONNECTION CYBER PORTAL
 * ARQUIVO: shared/types/auth.ts
 * OBJETIVO: Definição de Patentes, Usuário Master e Credenciais de Acesso.
 * GOVERNANÇA: PGT-01 (NORMA EXTREMO ZERO)
 * -------------------------------------------------------------------------
 */

export type UserRole = 'SUPER_ADMIN' | 'MASTER_CAMPO' | 'REGIONAL' | 'GESTOR' | 'ALUNO';

export interface AuthUser {
  id: string;
  email: 'masterl@cyberportal.com' | string;
  role: UserRole;
  target_id?: string; // ID da unidade/igreja/curso que ele controla
}

/**
 * CONFIGURAÇÃO MASTER
 * ATENÇÃO: A senha original "@@748596Jmsc##" deve ser injetada via 
 * variável de ambiente (.env) como MASTER_PASSWORD para evitar vazamentos no GitHub.
 */
export const MASTER_CONFIG = {
  SUPER_USER: 'masterl@cyberportal.com',
  DEFAULT_ROLE: 'ALUNO',
  // Referência de segurança para validação em Server Actions
  MASTER_CREDENTIAL_KEY: 'MASTER_AUTH_V1' 
};

/**
 * Interface para Payload de Autenticação
 */
export interface LoginPayload {
  email: string;
  password?: string; // A senha "@@748596Jmsc##" será validada contra o .env
}