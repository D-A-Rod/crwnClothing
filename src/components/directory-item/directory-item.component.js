import './directory-item.styles.js';
import { Body, BackgroundImage, DirectoryItemContainer } from './directory-item.styles.js';
import { useNavigate } from 'react-router-dom';


const DirectoryItem = ({ category }) => {
    const { imageUrl, title, route } = category;

    const navigate = useNavigate()

    const onNavigateHandler = () => navigate(route)

    return (
        <DirectoryItemContainer onClick={onNavigateHandler}>
        <BackgroundImage imageUrl={imageUrl} style={{
          backgroundImage: `url(${imageUrl})`
        }} />
        <Body>
          <h2>{title}</h2>
          <p>Shop now</p>
        </Body>
      </DirectoryItemContainer>
    )
}

export default DirectoryItem