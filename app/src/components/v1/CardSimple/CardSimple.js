import React from "react"
import {Link} from "gatsby";

import "./CardSimple.scss"

export default function CardSimple({children, link}) {
    return (
        <Link className="card" to={link}>
            {children}
        </Link>
    )
}