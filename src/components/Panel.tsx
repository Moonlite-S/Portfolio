
import '../Panel.css'

export function Panel({text, picture, align}: {text: any, picture: any, align: any}) {
    return(
        <div className='Parent'>
            <div className="Panel">
                {align === "Left" ? (
                    <div>
                        <div className='PictureBox'>
                            <div>
                                <p>{picture}</p>
                            </div>
                        </div>
                        <div className='TextBox'>
                            <div>
                                <h3>{text.title}</h3>
                                <p>{text.body}</p>
                            </div>
                        </div>
                    </div>
                ) : (
                    <div>
                        <div className='TextBox'>
                            <div>
                                <h3>{text.title}</h3>
                                <p>{text.body}</p>
                            </div>
                        </div>
                        <div className='PictureBox'>
                            <div>
                                <p>{picture}</p>
                            </div>
                        </div>                    
                    </div>
                )}
            </div>
        </div>
    )
}