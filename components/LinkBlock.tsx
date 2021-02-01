import Link from 'next/link'

interface Props {
  link: string
  text: string
}
const LinkBlock = (props: Props): JSX.Element => {
  const { link, text } = props

  return (
    <div>
      <Link href={link}>
        {text}
      </Link>
    </div>
  )
}

export default LinkBlock
