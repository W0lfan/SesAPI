

const types = [
    "input","textarea"
]

const appInput = {
    new  : function(type, placeholder, value, id, classNames, action = null) {
        if (!types.includes(type)) {
            throw new Error(`Error: type ${type} of input is unknown.`)
        } else {
            let component;

            if (type == 'input') {
                component = (
                    <input 
                        id = {id || null}
                        placeholder= {placeholder || null}
                        defaultValue={value || null}
                        className = {
                            classNames.length > 0 ? (
                                classNames.map((e) => {
                                    return e
                                })
                            ) : null
                        }
                        onClick={
                          action ? (() => action) : (() => { return })
                        }
                    />
                )
            }

            else if (type == 'textarea') {
                component = (
                    <textarea 
                        id = {id || null}
                        placeholder= {placeholder || null}
                        defaultValue={value || null}
                        className = {
                            classNames.length > 0 ? (
                                classNames.map((e) => {
                                    return e
                                })
                            ) : null
                        }
                        onClick={
                          action ? (() => action) : (() => { return })
                        }
                    ></textarea>
                )
            }

            return component;

        }
    }
}

export default appInput;