package pack.controller;

import java.time.LocalDate;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class BoardBean {
	
	private int num;
	private int readcnt, gnum, onum, nested;
	private String name,pass,mail,title,cont,bip,bdate;
	private String searchName, searchValue;

	public void setBdate() {
		LocalDate localDate = LocalDate.now();
		int year = localDate.getYear();
		int month = localDate.getMonthValue();
		int day = localDate.getDayOfMonth();
		this.bdate = year + "-" + month + "-" + day;
		
	}
}
