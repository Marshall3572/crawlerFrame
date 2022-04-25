class Resource {
    constructor(res) {
        this.id = res.id; //mongodb style id
        this.uuid = res.uuid;
        this.contentType = res.contentType;
        this.content = res.content;
    }

    getContent() {

    }

    getContentType() {

    }

    static getUUIDByID(id) {
        return id
    }

    static getIDByUUID(UUID) {
        return UUID
    }

    static get ['CONTENT_TYPES']() {
        return ['mixed', 'html', 'html_link', 'json']
    }
}

class SomeResource extends Resource {

}

module.exports = Resource
