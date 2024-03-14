interface PartProps {
  params: {
    part: string
  }
}

export default function Page(props: PartProps) {
  
  return (
    <div>{props.params.part}</div>
  )
}