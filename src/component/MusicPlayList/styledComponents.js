import styled from 'styled-components'

export const MusicTopBgContainer = styled.div`
  background-image: url('https://assets.ccbp.in/frontend/react-js/music-playlist/music-playlist-Edsheeran-bg.png');
  height: 40vh;
  width: 100%;
  background-size: cover;
  padding-left: 30px;
  padding-bottom: 20px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-end;
`
export const Heading = styled.h1`
  font-family: 'Roboto';
  font-size: 35px;
  color: white;
  font-weight: 900;
  margin-bottom: 0px;
`
export const Para = styled.p`
  font-family: 'Roboto';
  font-size: 20px;
  color: white;
  font-weight: 400;
  margin-top: 9px;
`
export const MusicBottomBgContainer = styled.div`
  background-color: #152850;
  min-height: 60vh;
  padding-top: 20px;
  padding-right: 20px;
  padding-left: 20px;
  padding-bottom: 5px;
`
export const HeadingAndSearchContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const Input = styled.input`
  font-family: 'Roboto';
  font-size: 13px;
  height: 30px;
  width: 200px;
  border: 1px solid #cbd5e1;
  background-color: transparent;
  border-top-left-radius: 8px;
  border-bottom-left-radius: 8px;
  padding-left: 10px;
  border-right: none;
  outline: none;
  color: #cbd5e1;
`
export const IconContainer = styled.div`
  border: 1px solid #cbd5e1;
  background-color: transparent;
  border-top-right-radius: 8px;
  border-bottom-right-radius: 8px;
  height: 30px;
  width: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-left: none;
`
export const InputContainer = styled.div`
  display: flex;
  align-items: center;
`
export const SavedVideosText = styled.h1`
  font-family: 'Roboto';
  font-size: 30px;
  color: white;
  font-weight: 700;
  margin-bottom: 0px;
  margin-top: 0px;
`
export const MusicListContainer = styled.ul`
  background-color: #152850;
  list-style: none;
  padding-left: 0px;
  overflow: auto;
  height: 60vh;
`
export const NoVideosFound = styled.p`
  font-family: 'Roboto';
  font-size: 30px;
  color: white;
  font-weight: 900;
`
export const NoVideosContainer = styled.div`
  background-color: #152850;
  height: 60vh;
  display: flex;
  align-items: center;
  justify-content: center;
`
