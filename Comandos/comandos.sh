    for file in $(ls);
	do
	  if [[ -d $file ]];
	  then
	    echo directorio: $file
	  else
	    if [[ -x $file ]];
	    then
	      echo archivo ejecutable: $file
	    else
	      echo archivo no ejecutable: $file
	    fi
	  fi
	done