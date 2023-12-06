import OutHeader from '../../components/headers/OutHeader/OutHeader'

export default function OutMainLayout({ children }) {
    return (
        <OutHeader>
            {children}
        </OutHeader>
    )
  }