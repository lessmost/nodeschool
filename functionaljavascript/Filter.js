function getShortMessages(messages) {
    return messages.filter(function (elem) {
        return elem.message && elem.message.length < 50;
    }).map(function (elem) {
        return elem.message;
    });
}

module.exports = getShortMessages;
