import React,{ Component } from "react"
    import { Link } from "gatsby"

    import Layout from "../components/layout"
    import Image from "../components/image"
    import SEO from "../components/seo"

    function initNetlifyIdentity(){
        console.log("initNetlifyIdentity called.")
        const script = document.createElement("script");

        script.src = "https://identity.netlify.com/v1/netlify-identity-widget.js"
        script.async = true;

        document.body.appendChild(script);
    }

    function openNetlifyModel(){
        const netlifyIdentity = window.netlifyIdentity;

        if(netlifyIdentity)
        netlifyIdentity.open();
        else
        console.log('netlifyIdentity not defined')
    }
    class NetlifyIdentity extends Component{
        componentDidMount(){
          initNetlifyIdentity();
        }
        render(){
            return(<div></div>)
        }
    }
    
    const IndexPage = () => {
        return(
            <Layout>
                <NetlifyIdentity/>
                <SEO title="Account"/>
                <h1>Hi People</h1>
                <h2 onclick={() => {openNetlifyModel( )}}>Login</h2>
                <div style ={{ maxWidth: '300px' , marginBottom : '1.45rem'}}>
                    <Image/>
                    </div>
                    </Layout>
        )
    }
    export default IndexPage