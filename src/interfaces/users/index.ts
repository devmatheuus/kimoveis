export interface IUserRequest {
    name: string;
    email: string;
    passwordUser: string;
    isAdm: boolean;
}

export interface IUser {
    id: string;
    name: string;
    email: string;
    isAdm: boolean;
    createdAt: Date;
    updatedAt: Date;
}

export interface IUserLogin {
    email: string;
    password: string;
}

export interface IUserData {
    userEmail: string;
    userId: string;
    userIsAdm: boolean;
}
