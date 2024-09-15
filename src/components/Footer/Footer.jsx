import "./Footer.scss"

export default function Footer() {
    return (
        <div className='footer'>
            &copy; {new Date().getFullYear()} JourneyNook. All Rights Reserved.
        </div>

    )
}