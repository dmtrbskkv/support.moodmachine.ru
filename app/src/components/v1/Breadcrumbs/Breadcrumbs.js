import React from "react"
import {Link} from "gatsby";

import './Breadcrumbs.scss';

export default function Breadcrumbs({breadcrumbs = []}) {
    if(breadcrumbs.length === 0){
        breadcrumbs = [{label:'Главная', link:'/'}]
    }



    return (
        <div className="breadcrumbs">
            <Link className={'breadcrumbs-item'} to={'/'}>Главная</Link>
            {breadcrumbs.map( (breadcrumb, index, array) => {
                if(breadcrumb.link === '/'){return;}
                if(index === (array.length - 1)){
                    return <span key={index} className={'breadcrumbs-item'}>{breadcrumb.label}</span>
                }else{
                    return <Link key={index} className={'breadcrumbs-item'} to={breadcrumb.link}>{breadcrumb.label}</Link>
                }
            })}
        </div>
    )
}