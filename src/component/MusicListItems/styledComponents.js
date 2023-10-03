import styled from 'styled-components'

export const MusicItemContainer = styled.li`
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const MusicImage = styled.img`
  height: 100px;
  width: 140px;
  margin-right: 20px;
`
export const Name = styled.p`
  font-family: 'Roboto';
  font-size: 16px;
  color: white;
  font-weight: 600;
`
export const Genre = styled.p`
  font-family: 'Roboto';
  font-size: 16px;
  color: #3b82f6;
  font-weight: 500;
`
export const DurationContainer = styled.div`
  display: flex;
  align-items: center;
`

export const CustomDeleteButton = styled.button`
  background-color: transparent;
  border: none;
  outline: none;
  margin-left: 20px;
  cursor: pointer;
`
export const ImageContainer = styled.div`
  display: flex;
  align-items: center;
`
