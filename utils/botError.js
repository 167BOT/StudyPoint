let moment = require('moment')();

class StudyError extends Error {
    constructor(...data) {
        super(...data);

        this.name = `[${moment.format('DD/MM/YYYY HH:mm')}]`+'[StudyError]'
    }
}

module.exports = StudyError;