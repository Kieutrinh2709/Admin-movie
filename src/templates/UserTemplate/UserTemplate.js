import { Fragment, useEffect } from "react";
import { Route } from "react-router";




export const UserTemplate = (props) => { //path, exact, Component

    const { Component, ...restProps } = props;
    useEffect(() => {
        window.scrollTo(0, 0);

    })

    return <Route {...restProps} render={(propsRoute) => { //props.location,props.history,props.match

        return <Fragment>
            <div className="lg:flex">
               <Component {...propsRoute} />
                <div className="lg:flex items-center justify-center bg-indigo-100 flex-1 h-screen">
                    <div className="max-w-xs transform duration-200 hover:scale-110 cursor-pointer">
                        <img src="https://cdn.dribbble.com/users/6252196/screenshots/15334182/media/7acdd2855c8b0a5c7cd473c54c06843b.png?compress=1&resize=3600x2400" alt="..."/>
                    </div>
                </div>
            </div>


        </Fragment>
    }} />

}