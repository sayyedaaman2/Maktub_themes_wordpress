
interface HeadItem {
    name : string;
    link : string;
    subHead : [] | null;
}

interface SubHeadItem {
    name : string;
    link : string;
    color : string | null;
    subHead : [SubHeadItem] | [] |null;
}

interface ListItemProps {
    list : HeadItem | null;
}

interface TagProps{
    name : string ;
    link : string ;
}
type Tag ={
    name : string ;
    link : string ;
}
interface Post {
    title : string;
    image : string | null;
    published_date : string | null;
    read : string | null;
    comment : number  | null;
    views : number | null;
    content : string | null;
    tags : [Tag] | null;
}

interface PostProps {
    post : Post;
}

interface PostListProps{
    data : Post[]
}

interface AsideProps{
    data : Post[]
}