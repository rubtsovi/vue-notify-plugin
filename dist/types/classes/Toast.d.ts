import { NotificationContext } from "../enums";
import { NotificationMessage } from "..";
export default class {
    private _id;
    private _isVisible;
    private _header;
    private _message;
    private _context;
    constructor(obj: NotificationMessage);
    constructor(msg: string, header: string);
    get id(): string;
    get header(): string | null;
    get message(): string;
    get context(): NotificationContext;
    get isVisible(): boolean;
    set isVisible(value: boolean);
}
