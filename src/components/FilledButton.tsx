import MButton from "@mui/material/Button"

const FilledButton = (props: { children: React.ReactNode, onClick?: () => void, className?: string }) => {
  return <MButton className={props.className} onClick={props.onClick} variant="contained">{props.children}</MButton>
}

export default FilledButton
