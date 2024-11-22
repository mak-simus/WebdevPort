import React from 'react'
import { BentoGrid, BentoGridItem } from './BentoGrid'
import { gridItems } from '@/data'

const Grid = () => {
  return (
    <section>
        <BentoGrid>
            {gridItems.map
            (({ id, title, description, className, img, imgClassName, titleClassName, spareImg}) => (
                <BentoGridItem 
                id={id}
                key={id}
                title={title}
                description = {description}
                className={className} 
                img={img}
                imgClassName={imgClassName}
                titleClassName ={titleClassName}
                spareImg={spareImg} >    

                </BentoGridItem>
            )

            )
            }
        </BentoGrid>
    </section>
  )
}

export default Grid
