import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import PropTypes from 'prop-types'


const Protected = (props) => {
    const {Component} = props
    const navigate = useNavigate()

    useEffect(()=>{
        let login = localStorage.getItem('login')
        if(!login){
            navigate('/')
        }
    })
    
    return (
    <div>
        <Component/>
    </div>
  )
}
Protected.propTypes = {
    Component: PropTypes.func
}
export default Protected
