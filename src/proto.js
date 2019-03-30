/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
import * as $protobuf from "protobufjs/minimal";

// Common aliases
const $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
const $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

export const Todo = $root.Todo = (() => {

    /**
     * Properties of a Todo.
     * @exports ITodo
     * @interface ITodo
     * @property {string|null} [name] Todo name
     * @property {boolean|null} [done] Todo done
     */

    /**
     * Constructs a new Todo.
     * @exports Todo
     * @classdesc Represents a Todo.
     * @implements ITodo
     * @constructor
     * @param {ITodo=} [properties] Properties to set
     */
    function Todo(properties) {
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * Todo name.
     * @member {string} name
     * @memberof Todo
     * @instance
     */
    Todo.prototype.name = "";

    /**
     * Todo done.
     * @member {boolean} done
     * @memberof Todo
     * @instance
     */
    Todo.prototype.done = false;

    /**
     * Creates a new Todo instance using the specified properties.
     * @function create
     * @memberof Todo
     * @static
     * @param {ITodo=} [properties] Properties to set
     * @returns {Todo} Todo instance
     */
    Todo.create = function create(properties) {
        return new Todo(properties);
    };

    /**
     * Encodes the specified Todo message. Does not implicitly {@link Todo.verify|verify} messages.
     * @function encode
     * @memberof Todo
     * @static
     * @param {ITodo} message Todo message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Todo.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.name != null && message.hasOwnProperty("name"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
        if (message.done != null && message.hasOwnProperty("done"))
            writer.uint32(/* id 2, wireType 0 =*/16).bool(message.done);
        return writer;
    };

    /**
     * Encodes the specified Todo message, length delimited. Does not implicitly {@link Todo.verify|verify} messages.
     * @function encodeDelimited
     * @memberof Todo
     * @static
     * @param {ITodo} message Todo message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Todo.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a Todo message from the specified reader or buffer.
     * @function decode
     * @memberof Todo
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {Todo} Todo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Todo.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.Todo();
        while (reader.pos < end) {
            let tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.name = reader.string();
                break;
            case 2:
                message.done = reader.bool();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a Todo message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof Todo
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {Todo} Todo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Todo.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a Todo message.
     * @function verify
     * @memberof Todo
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    Todo.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.name != null && message.hasOwnProperty("name"))
            if (!$util.isString(message.name))
                return "name: string expected";
        if (message.done != null && message.hasOwnProperty("done"))
            if (typeof message.done !== "boolean")
                return "done: boolean expected";
        return null;
    };

    /**
     * Creates a Todo message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof Todo
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {Todo} Todo
     */
    Todo.fromObject = function fromObject(object) {
        if (object instanceof $root.Todo)
            return object;
        let message = new $root.Todo();
        if (object.name != null)
            message.name = String(object.name);
        if (object.done != null)
            message.done = Boolean(object.done);
        return message;
    };

    /**
     * Creates a plain object from a Todo message. Also converts values to other types if specified.
     * @function toObject
     * @memberof Todo
     * @static
     * @param {Todo} message Todo
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    Todo.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        let object = {};
        if (options.defaults) {
            object.name = "";
            object.done = false;
        }
        if (message.name != null && message.hasOwnProperty("name"))
            object.name = message.name;
        if (message.done != null && message.hasOwnProperty("done"))
            object.done = message.done;
        return object;
    };

    /**
     * Converts this Todo to JSON.
     * @function toJSON
     * @memberof Todo
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    Todo.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return Todo;
})();

export const TodoList = $root.TodoList = (() => {

    /**
     * Properties of a TodoList.
     * @exports ITodoList
     * @interface ITodoList
     * @property {string|null} [title] TodoList title
     * @property {Array.<ITodo>|null} [todos] TodoList todos
     */

    /**
     * Constructs a new TodoList.
     * @exports TodoList
     * @classdesc Represents a TodoList.
     * @implements ITodoList
     * @constructor
     * @param {ITodoList=} [properties] Properties to set
     */
    function TodoList(properties) {
        this.todos = [];
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * TodoList title.
     * @member {string} title
     * @memberof TodoList
     * @instance
     */
    TodoList.prototype.title = "";

    /**
     * TodoList todos.
     * @member {Array.<ITodo>} todos
     * @memberof TodoList
     * @instance
     */
    TodoList.prototype.todos = $util.emptyArray;

    /**
     * Creates a new TodoList instance using the specified properties.
     * @function create
     * @memberof TodoList
     * @static
     * @param {ITodoList=} [properties] Properties to set
     * @returns {TodoList} TodoList instance
     */
    TodoList.create = function create(properties) {
        return new TodoList(properties);
    };

    /**
     * Encodes the specified TodoList message. Does not implicitly {@link TodoList.verify|verify} messages.
     * @function encode
     * @memberof TodoList
     * @static
     * @param {ITodoList} message TodoList message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    TodoList.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.title != null && message.hasOwnProperty("title"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.title);
        if (message.todos != null && message.todos.length)
            for (let i = 0; i < message.todos.length; ++i)
                $root.Todo.encode(message.todos[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified TodoList message, length delimited. Does not implicitly {@link TodoList.verify|verify} messages.
     * @function encodeDelimited
     * @memberof TodoList
     * @static
     * @param {ITodoList} message TodoList message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    TodoList.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a TodoList message from the specified reader or buffer.
     * @function decode
     * @memberof TodoList
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {TodoList} TodoList
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    TodoList.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.TodoList();
        while (reader.pos < end) {
            let tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.title = reader.string();
                break;
            case 2:
                if (!(message.todos && message.todos.length))
                    message.todos = [];
                message.todos.push($root.Todo.decode(reader, reader.uint32()));
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a TodoList message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof TodoList
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {TodoList} TodoList
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    TodoList.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a TodoList message.
     * @function verify
     * @memberof TodoList
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    TodoList.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.title != null && message.hasOwnProperty("title"))
            if (!$util.isString(message.title))
                return "title: string expected";
        if (message.todos != null && message.hasOwnProperty("todos")) {
            if (!Array.isArray(message.todos))
                return "todos: array expected";
            for (let i = 0; i < message.todos.length; ++i) {
                let error = $root.Todo.verify(message.todos[i]);
                if (error)
                    return "todos." + error;
            }
        }
        return null;
    };

    /**
     * Creates a TodoList message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof TodoList
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {TodoList} TodoList
     */
    TodoList.fromObject = function fromObject(object) {
        if (object instanceof $root.TodoList)
            return object;
        let message = new $root.TodoList();
        if (object.title != null)
            message.title = String(object.title);
        if (object.todos) {
            if (!Array.isArray(object.todos))
                throw TypeError(".TodoList.todos: array expected");
            message.todos = [];
            for (let i = 0; i < object.todos.length; ++i) {
                if (typeof object.todos[i] !== "object")
                    throw TypeError(".TodoList.todos: object expected");
                message.todos[i] = $root.Todo.fromObject(object.todos[i]);
            }
        }
        return message;
    };

    /**
     * Creates a plain object from a TodoList message. Also converts values to other types if specified.
     * @function toObject
     * @memberof TodoList
     * @static
     * @param {TodoList} message TodoList
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    TodoList.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        let object = {};
        if (options.arrays || options.defaults)
            object.todos = [];
        if (options.defaults)
            object.title = "";
        if (message.title != null && message.hasOwnProperty("title"))
            object.title = message.title;
        if (message.todos && message.todos.length) {
            object.todos = [];
            for (let j = 0; j < message.todos.length; ++j)
                object.todos[j] = $root.Todo.toObject(message.todos[j], options);
        }
        return object;
    };

    /**
     * Converts this TodoList to JSON.
     * @function toJSON
     * @memberof TodoList
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    TodoList.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return TodoList;
})();

export { $root as default };
