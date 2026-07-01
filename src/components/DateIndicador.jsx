export default function DateIndicador(){
    const hoje = new Date();

    const formato = hoje.toLocaleDateString("pt-BR",{
        weekday:"long",
        day: "numeric",
        month:"long",
    });
const capitalize = formato.charAt(0).toUpperCase() + formato.slice(1);

return(
     <p className="text-neutral-400 text-sm font-medium">
      {capitalize}
    </p>
)

}