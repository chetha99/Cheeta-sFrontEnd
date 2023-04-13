import React from "react";
const authLayout = (ChildComponent) => {
    class AuthLayout extends React.Component {
        constructor(props){
            super(props);
    
            this.state = {};
        }

        render(){
            return <>
            <section className="vh-100">
                
                       
                            <ChildComponent {...this.props} />
                    
            </section>
        </>
        }
    }

    return AuthLayout;
}

export default authLayout;