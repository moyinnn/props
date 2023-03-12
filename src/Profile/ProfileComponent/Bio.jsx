

export default function Bio (props){
    const bio = props.bio;
    return(
        <div>
            <h2><strong className="h2">Bio:</strong>{bio}</h2>
        </div>
    );
}