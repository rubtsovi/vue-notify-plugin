import { nanoid } from "nanoid";
import { NotificationContext } from "../enums";
export default class {
    _id;
    _isVisible;
    _header;
    _message;
    _context;
    constructor(msgOrObj, header, context) {
        this._isVisible = true;
        this._id = nanoid(10);
        if (typeof msgOrObj === "string") {
            this._message = msgOrObj;
            this._header = header ?? null;
            this._context = context ?? NotificationContext.DEFAULT;
        }
        else {
            this._message = msgOrObj.text;
            this._header = msgOrObj.header ?? null;
            this._context = msgOrObj.context ?? NotificationContext.DEFAULT;
        }
    }
    get id() {
        return this._id;
    }
    get header() {
        return this._header;
    }
    get message() {
        return this._message;
    }
    get context() {
        return this._context;
    }
    get isVisible() {
        return this._isVisible;
    }
    set isVisible(value) {
        this._isVisible = value;
    }
}
//# sourceMappingURL=Toast.js.map