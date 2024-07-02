interface HeaderProps {
    courseName: string;
}

export const Header: React.FC<HeaderProps> = ({courseName}) => {
    return(
        <div>
            <h1> {courseName} </h1>
        </div>
    )
}