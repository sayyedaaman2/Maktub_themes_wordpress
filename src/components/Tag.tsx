import {BsHash} from 'react-icons/bs'

const Tag = ({name,link}:TagProps):JSX.Element => {
    return (
    <a href={link as string} className="tag">
      <BsHash/>
      <span className="tag-name">{name}</span>
    </a>
  );
};

export default Tag;
