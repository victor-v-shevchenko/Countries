import { FormControl, InputLabel, MenuItem, Select, SelectChangeEvent } from "@mui/material";
import { NamedItem } from "../dto/NamedItem";

export function Selector(props: { id: string, value?: string, options : NamedItem[], label: string, setValue?: (value: string) => void }) {
    return (
      <FormControl fullWidth>
        <InputLabel id={props.id + "-label"}>{props.label}</InputLabel>          
        <Select
          id={props.id}
          labelId={props.id + "-label"}
          sx={{ 
            margin: "1em"
          }}
          value={props?.value}
          onChange={(event: SelectChangeEvent) => { if (props.setValue) props.setValue(event.target.value as string); }}
          >      
          {props.options.map(option => (<MenuItem key={option.id} value={option.id}>{option.name}</MenuItem>))}    
        </Select>
      </FormControl>
    );
  }