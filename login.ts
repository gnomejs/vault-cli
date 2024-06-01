import type { CommandOptions } from "@gnome/exec";
import { type VaultCommand, vault } from "./cli.ts";

/**
 * Represents the arguments for the login command.
 */
export interface LoginArgs extends Record<string, unknown> {
    /**
     * The address of the Vault server.
     */
    address?: string;

    /**
     * The address of the Vault agent.
     */
    agentAddress?: string;

    /**
     * The field to retrieve from the login response.
     */
    field?: string;

    /**
     * The format in which to display the login response.
     * Possible values are: 'json', 'table', 'yaml', 'pretty'.
     */
    format?: "json" | "table" | "yaml" | "pretty";

    /**
     * The multi-factor authentication (MFA) method to use.
     */
    mfa?: string;

    /**
     * The authentication method to use.
     * Possible values are: 'userpass', 'ldap'.
     */
    method?: "userpass" | "ldap";

    /**
     * The namespace to use for the login operation.
     */
    namespace?: string;

    /**
     * Specifies whether the login operation should be non-interactive.
     */
    nonInteractive?: boolean;

    /**
     * Specifies whether to skip storing the login token.
     */
    noStore?: boolean;

    /**
     * Specifies whether to skip printing the login response.
     */
    noPrint?: boolean;

    /**
     * The path to the Vault server.
     */
    path?: string;

    /**
     * Specifies whether to skip verifying the TLS certificate of the Vault server.
     */
    tlsSkipVerify?: boolean;

    /**
     * The expected server name in the TLS certificate.
     */
    tlsServerName?: string;

    /**
     * Specifies whether to only output the login token.
     */
    tokenOnly?: string;

    /**
     * The unlock key for the Vault server.
     */
    unlockKey?: string;

    /**
     * The time-to-live (TTL) for the wrapped response.
     */
    wrapTtl?: string;
}

/**
 * Login to a vault server.
 *
 * @param args The command arguments. @see LoginArgs
 * @param options The command options. @see CommandOptions
 * @returns The VaultCommand instance.
 */
export function login(args: LoginArgs, options?: CommandOptions) : VaultCommand {
    return vault({
        splat: {
            command: "login",
        },
        ...args,
    }, options);
}
