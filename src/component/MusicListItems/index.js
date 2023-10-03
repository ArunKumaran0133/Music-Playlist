import {AiOutlineDelete} from 'react-icons/ai'

import {
  MusicItemContainer,
  MusicImage,
  Name,
  Genre,
  DurationContainer,
  CustomDeleteButton,
  ImageContainer,
} from './styledComponents'

const MusicListItems = props => {
  const {musicDetails, onDeleteTrack} = props
  const {id, imageUrl, name, genre, duration} = musicDetails
  const deleteTrack = () => {
    onDeleteTrack(id)
  }
  return (
    <MusicItemContainer>
      <ImageContainer>
        <MusicImage src={imageUrl} alt="track" />
        <div>
          <Name>{name}</Name>
          <Genre>{genre}</Genre>
        </div>
      </ImageContainer>
      <DurationContainer>
        <Name>{duration}</Name>
        <CustomDeleteButton
          type="button"
          onClick={deleteTrack}
          data-testid="delete"
        >
          <AiOutlineDelete fontSize={20} color="white" />
        </CustomDeleteButton>
      </DurationContainer>
    </MusicItemContainer>
  )
}

export default MusicListItems
