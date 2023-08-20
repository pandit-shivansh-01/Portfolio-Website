import React from 'react'
import { Link } from 'react-router-dom'
function Footer() {
  return (
    <>
        <footer class="page-footer">
        <div class="container">
            <div class="row align-items-center">
                <div class="col-sm-6">
                    <p>Copyright <script>document.write(new Date().getFullYear())</script> &copy; <Link to="http://www.devcrud.com" target="_blank">Shivansh Pandey</Link></p>
                </div>
                <div class="col-sm-6">
                    <div class="socials">
                    <Link  className="social-item" to="https://www.linkedin.com/in/shivansh-pandey001/"><i className="fa-brands fa-linkedin fa-xl"></i></Link>
                    <Link className="social-item" to="mailto:shivanshpandey506@gmail.com"><i className="fa-brands fa-google-plus-g fa-xl"></i></Link>
                    <Link className="social-item" to="https://github.com/pandit-shivansh-01"><i class="fa-brands fa-github fa-xl"></i></Link>
                    <Link className="social-item" to="https://www.facebook.com/shivansh.pandey.77715869"><i class="fa-brands fa-facebook fa-xl"></i></Link>
                    </div>
                </div>
            </div>
        </div>
    </footer> 
    </>
  )
}

export default Footer