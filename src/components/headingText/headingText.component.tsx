interface HeadingTextComponentProps {
  title: string
}

const HeadingTextComponent = ({ title }: HeadingTextComponentProps) => {
  return (
    <div style={{ height: '5vh', padding: '10px' }}>
      <p style={{ textAlign: 'center', color: 'steelblue' }}>{title}</p>
    </div>
  )
}

export default HeadingTextComponent;