import { useParams } from "react-router-dom"

const ThemePage: React.FC = () => {
  const { themeKey } = useParams<{themeKey: string}>()

  return (
    <div>
      <h2>{themeKey}</h2>
    </div>
  )
}

export default ThemePage