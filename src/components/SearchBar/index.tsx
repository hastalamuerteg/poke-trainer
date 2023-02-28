import { useEffect, useState } from 'react'
import { SearchIcon } from '../../lib'
import * as S from './styles'

interface ISearchBarProps {
  onSearch: (search: string) => void
  onResetList: () => void
}

export const SearchBar = ({ onSearch, onResetList }: ISearchBarProps) => {
  const [search, setSearch] = useState<string>('')
  const [isDirty, setIsDirty] = useState<boolean>(false)

  const handleSearch = () => {
    if (search) {
      onSearch(search)
      setIsDirty(true)
    }
  }

  useEffect(() => {
    if (!search && isDirty) {
      onResetList()
    }
  }, [search, isDirty])

  return (
    <S.Container>
      <S.InputText
        value={search}
        onChange={(e: any) => setSearch(e.target.value)}
        placeholder="Search for Pokemon"
        required
      />
      <S.SearchButton onClick={handleSearch}>
        <SearchIcon />
      </S.SearchButton>
    </S.Container>
  )
}
