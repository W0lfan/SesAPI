<<<<<<< HEAD

const SesAPIStorage = 'SesAPIStorage'; // Exclusive localstorage value


export const storage = {
    access : function(type = SesAPIStorage) {
        return JSON.parse(localStorage.getItem(type));
    },
    set : function(value = {}, to = SesAPIStorage) {
        localStorage.setItem(
            to, JSON.stringify(value)
        )
    }
}

if (!storage.access()) storage.set({});

if (!storage.access("SesAPIParameters")) storage.set({
    preferedDisplay : "grid"
=======

const SesAPIStorage = 'SesAPIStorage'; // Exclusive localstorage value


export const storage = {
    access : function(type = SesAPIStorage) {
        return JSON.parse(localStorage.getItem(type));
    },
    set : function(value = {}, to = SesAPIStorage) {
        localStorage.setItem(
            to, JSON.stringify(value)
        )
    }
}

if (!storage.access()) storage.set({});

if (!storage.access("SesAPIParameters")) storage.set({
    preferedDisplay : "grid"
>>>>>>> 218f891f43297a53f31bca18f62cdcc649d01f8a
}, "SesAPIParameters" );