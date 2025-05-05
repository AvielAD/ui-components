import BarBannerNew from '@/components/barbanner'
import CardBannerNew from '@/components/cardbanner'

const Index = () => {
    return (
        <>
            <BarBannerNew button={null} title={{message: "Estadisticas", icon:""}}></BarBannerNew>
            <div className='grid gap-6 mb-8 grid-cols-1 md:grid-cols-2 xl:grid-cols-4'>
                {
                    CardsBannerInfo.map((item, index) => (
                        <CardBannerNew key={index} {...item}></CardBannerNew>
                    ))
                }
            </div>


        </>
    )
}

export default Index

const CardsBannerInfo = [
    {
        title: "En proceso",
        value: "200",
        icon: "bi bi-bar-chart-fill"
    },
    {
        title: "Por entregar",
        value: "200",
        icon: "bi bi-pie-chart-fill"
    },
    {
        title: "Mes actual",
        value: "200",
        icon: "bi bi-bar-chart-steps"
    },
    {
        title: "Diagnosticos",
        value: "200",
        icon: "bi bi-graph-up-arrow"
    }
]