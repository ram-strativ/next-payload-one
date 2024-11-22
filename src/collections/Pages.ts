import { Block, CollectionConfig } from "payload";


const QuoteBlock: Block= {
    slug : "Quote", 
    imageURL: "https://www.strativ.se/_next/image?url=https%3A%2F%2Fstrativ-dev-headless-site-media-bucket.s3.eu-north-1.amazonaws.com%2Fcropped_Branschvinnare_Transparant_2_1_1_b50e4d0c74.png&w=1920&q=75", 
    imageAltText: "A nice image thmbnail image", 
    interfaceName: "QuoteBlock",
    fields: [
        {
            name: "quoteHeader", 
            type: "text", 
            required: true 
        }, 
        {
            name: "quoteText",
            type: "text",
            required: true
        }
    ]
}

export const Pages: CollectionConfig = {
    slug: "pages",
    labels: {
        singular: "Page",
        plural: "Pages" 
    }, 
    fields: [
        {
            name: "title",
            label: "Title",
            type: "text",
            required: true
        },
        {
            name: "checkbox",
            label: "checkbox",
            type: "checkbox",
            required: true
        },
        {
            name: "code",
            label: "code",
            type: "code",
            required: true
        },
        {
            name: "date",
            label: "date",
            type: "date",
            required: true
        },
        {
            name: "email",
            label: "email",
            type: "email",
            required: true
        },
        {
            name: "Json",
            label: "json",
            type: "json",
            required: true
        },
        {
            name: "numb",
            label: "numb",
            type: "number",
            required: true
        },
        {
            name: "point",
            label: "point",
            type: "point",
            required: true
        },
        {
            name: "rich text",
            label: "rich text",
            type: "richText",
            required: true
        },
        {
            name: "radio",
            label: "radio",
            type: "richText",
            required: true
        },
        {
            name: "text area",
            label: "text area ",
            type: "textarea",
            required: true
        },
        {
            name: "thumbnail",
            label: "thumbnail",
            type: "upload",
            relationTo: "media",
            required: true
        },
        {
            type: "tabs", 
            tabs: [
                {
                    label: "Tab 1",
                    description: "This will appear within the tab above the fields",
                    fields: [
                        {
                            name: "your name", 
                            type: "text", 
                            required: true
                        },
                        {
                            name: "your age", 
                            type: "number", 
                            required: true
                        }

                    ]
                },
                {
                    name: 'tabTwo',
                    label: 'Tab Two Label', // required
                    interfaceName: 'TabTwo', // optional (`name` must be present)
                    fields: [
                      // required
                      {
                        name: 'numberField', // accessible via tabTwo.numberField
                        type: 'number',
                        required: true,
                      },
                    ],
                  },
                  {
                    name: 'tabThree',
                    label: 'Tab 3', // required
                    interfaceName: 'tabThree', // optional (`name` must be present)
                    fields: [
                      // required
                      {
                        name: 'date', // accessible via tabTwo.numberField
                        type: 'date',
                        required: true,
                      },
                    ],
                  },
            ]
        }, 
        {
            name: "My array field (Slider) ", 
            label: "My array field (Slider) ",
            type: "array", 
            minRows: 2, 
            maxRows: 10, 
            labels: {
                singular: "Slide",
                plural: "Slides"
            }, 
            fields: [
                {
                    name: "title",
                    type: "text"
                }, 
                {
                    name: "image", 
                    type: "upload",
                    relationTo: "media", 
                    required: true 
                }, 
                {
                    name: "caption", 
                    type: "text"
                }
            ]
        }, 
        {
            name: "layout", 
            type: "blocks",
            minRows: 2,
            maxRows: 10, 
            blocks: [
                QuoteBlock
            ]
        }
        
    ]
}