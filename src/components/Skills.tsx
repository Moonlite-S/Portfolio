import { BoxedDiv } from "./Misc"

export function Skills() {
  return (
      <BoxedDiv id='Skills'>

        <h2 className="ResponsiveTextLg ResponsiveFontLight m-5 border-b border-black">Skills:</h2>

        <h2 className="ResponsiveTextLg ResponsiveFontLight mx-5">Languages:</h2>

        <div className="flex flex-row mx-5 flex-wrap ">

          <SkillGroup name="C++" url="https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/ISO_C%2B%2B_Logo.svg/1200px-ISO_C%2B%2B_Logo.svg.png"/>

          <SkillGroup name="Python" url="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1200px-Python-logo-notext.svg.png"/>

          <SkillGroup name="Java" url="https://classes.engineering.wustl.edu/cse425s/images/2/26/Java.png"/>

          <SkillGroup name="JavaScript" url="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/2048px-Unofficial_JavaScript_logo_2.svg.png"/>
          
          <SkillGroup name="TypeScript" url="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/1200px-Typescript_logo_2020.svg.png"/>

        </div>

        <h2 className="ResponsiveTextLg ResponsiveFontLight mx-5">Frameworks:</h2>

        <div className="flex flex-row mx-auto flex-wrap">

          <SkillGroup name="React" url="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png"/>

          <SkillGroup name="TailwindCSS" url="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/1200px-Tailwind_CSS_Logo.svg.png"/>

          <SkillGroup name="Django" url="https://www.djangoproject.com/m/img/logos/django-logo-negative.png" />

          <SkillGroup name="Flask" url="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Flask_logo.svg/1280px-Flask_logo.svg.png"/>
        
        </div>

        <h2 className="ResponsiveTextLg ResponsiveFontLight mx-5">Other:</h2>

        <div className="flex flex-row mx-auto">

          <SkillGroup name="HTML" url="https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/1024px-HTML5_logo_and_wordmark.svg.png"/>

          <SkillGroup name="CSS" url="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/340px-CSS3_logo_and_wordmark.svg.png"/>
          
          <SkillGroup name="Git" url="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Git-logo.svg/1200px-Git-logo.svg.png"/>

          <SkillGroup name="Figma" url="https://upload.wikimedia.org/wikipedia/commons/a/ad/Figma-1-logo.png"/>

        </div>


      </BoxedDiv>
)
}

type SkillGroupProps = {
  name: string,
  url: string
}

function SkillGroup({name, url="#"}: SkillGroupProps) {
  return (
  <div className="p-4 rounded-md">

      <img src={url} className="h-8 sm:h-10 md:h-12 " alt={name}/>
      
    </div>
  )
}