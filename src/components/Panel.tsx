
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
                                {text.url !== "" ? <h3><a href={text.url}>{text.title}</a></h3> : <h3>{text.title}</h3>}
                                <p>{text.body}</p>
                                <br/>
                               
                        {
                            text.skills !== "" ? 
                                <div>
                                    <h4>Skills Used:</h4>
                                    <p>{text.skills}</p>
                                </div> : null
                        }
                            </div>
                        </div>
                    </div>
                ) : (
                    <div>
                        <div className='TextBox'>
                            <div>
                                {text.url !== "" ? <h3><a href={text.url}>{text.title}</a></h3> : <h3>{text.title}</h3>}
                                <p>{text.body}</p>
                                <br/>
                                {
                                    text.skills !== "" ? 
                                        <div>
                                            <h4>Skills Used:</h4>
                                            <p>{text.skills}</p>
                                        </div> : null
                                }
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