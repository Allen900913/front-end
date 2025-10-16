export{}

export type Roles = "admin" | "moderator";

declare global {
    interface CustomJwtSessionClaim {
        metadata:{
            role?: Roles;
        };
    }
}