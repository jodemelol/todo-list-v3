import { extendTheme } from "@chakra-ui/react"


export default extendTheme({
    styles:{
        global:{
            'html,body':{
                fontFamily:"Caveat, cursive",
                bg:"radial-gradient(circle, rgba(238,174,202,1) 0%, rgba(148,187,233,1) 100%)"
            },
        },
    },
})