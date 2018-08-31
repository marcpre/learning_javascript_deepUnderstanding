(function(global, $) {

    var Greetr = function(firstName, lastName, language) {
        return new Greetr.init(firstName, lastName, language);
    };

    // Below obj are NOT exposed
    var supportedLangs = ['en', 'es'];

    var greetings = {
        en: 'Hello',
        es: 'Hola'
    };

    var formalGreetings = {
        en: 'Greetings',
        es: 'Saludos'
    };

    var logMessages = {
        en: 'Logged in',
        es: 'Inicio sesion'
    }

    // Below obj are exposed
    Greetr.prototype = {
        fullName: function() {
            return this.firstName + ' ' + this.lastName;
        },

        validate: function() {
            if (supportedLangs.indexOf(this.language) === -1) {
                throw 'Invalid language';
            }
        },

        greetings: function() {
            return greetings[this.language] + ' ' + this.firstName + '!';
        },

        formalGreetings: function() {
            return formalGreetings[this.language] + ' ' + this.fullName();
        },

        greet: function(formal) {
            var msg;

            if (formal) {
                msg = this.formalGreetings();
            }
            else {
                msg = this.greetings();
            }

            if (console) {
                console.log(msg);
            }
            return this;
        },

        log: function() {
            if (console) {
                console.log(logMessages[this.language] + ', ' + this.fullName());
            }
            //makes the function chainable
            return this;
        },

        setLang: function(lang) {
            this.language = lang;
            this.validate();
            return this;
        },

        HTMLGreeting: function(selector, formal) {
            if (!$) {
                throw "JQery not loaded.";
            }

            if (!selector) {
                throw "Missing JQery selector.";
            }

            var msg;
            if (formal) {
                msg = this.formalGreetings();
            }
            else {
                msg = this.greetings();
            }

            $(selector).html(msg);

            return this;
        }

    };

    Greetr.init = function(firstName, lastName, language) {
        var self = this;
        self.firstName = firstName || '';
        self.lastName = lastName || '';
        self.language = language || 'en';
    };

    Greetr.init.prototype = Greetr.prototype;

    global.Greetr = global.G$ = Greetr;

}(window, jQuery));
