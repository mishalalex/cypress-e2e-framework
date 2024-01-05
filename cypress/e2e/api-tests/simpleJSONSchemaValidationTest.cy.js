// install ajv library and instantiate it
const Ajv = require('ajv');
const ajv = new Ajv()
// ajv.compile() can validate whether the json is as specified in the json schema
describe('simple JSON schema validation test', () => {
    it('Schema validation against response', () => {
        cy.request({
            method: 'GET',
            url: 'https://fakestoreapi.com/products'
        })
            .then((response) => {
                const schema = {
                    "$schema": "http://json-schema.org/draft-07/schema#",
                    "title": "Generated schema for Root",
                    "type": "array",
                    "items": {
                        "type": "object",
                        "properties": {
                            "id": {
                                "type": "number"
                            },
                            "title": {
                                "type": "string"
                            },
                            "price": {
                                "type": "number"
                            },
                            "description": {
                                "type": "string"
                            },
                            "category": {
                                "type": "string"
                            },
                            "image": {
                                "type": "string"
                            },
                            "rating": {
                                "type": "object",
                                "properties": {
                                    "rate": {
                                        "type": "number"
                                    },
                                    "count": {
                                        "type": "number"
                                    }
                                },
                                "required": [
                                    "rate",
                                    "count"
                                ]
                            }
                        },
                        "required": [
                            "id",
                            "title",
                            "price",
                            "description",
                            "category",
                            "image",
                            "rating"
                        ]
                    }
                }
                const validateSchema = ajv.compile(schema)
                const isSchemaValid = validateSchema(response.body)
                expect(isSchemaValid).to.be.true;
            })
    })
})