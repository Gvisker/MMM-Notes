#!/usr/bin/perl 
#Notes.pl
#Grant Visker CSIS 400
use strict;
use warnings;
use CGI qw(:standard);


my $add_note = param("note");
my $add = param("add");



print "Content-Type: text/html \n\n";

open(DATA, "</home/pi/MagicMirror/modules/MMM-Notes/mirrorNotes.txt") or die "Couldn't open file mirrorNotes.txt, $!";

my @notes = <DATA>;

close(DATA);

my $size = scalar @notes;



if($add eq "add"){
	open(DATA, ">>/home/pi/MagicMirror/modules/MMM-Notes/mirrorNotes.txt") or die "Couldn't open file mirrorNotes.txt, $!";
	#open(DATA3, ">>/home/pi/MagicMirror/modules/MMM-Notes/mirrorNotes.html") or die "Couldn't open file mirrorNotes.html, $!";
	print DATA $add_note;
	print DATA ("\n");

	#print DATA3 "<p><h2 style=\"text-align:center\">~ $add_note</h2></p>\n";
 	#print DATA3 "<br>";
	
	close(DATA);
}else{
open(DATA2, '>', '/home/pi/MagicMirror/modules/MMM-Notes/mirrorNotes.txt') or die "Couldn't open file mirrorNotes.txt, $!";
#open(DATA3, '>', '/home/pi/MagicMirror/modules/MMM-Notes/mirrorNotes.html') or die "Couldn't open file mirrorNotes.txt, $!";
#print DATA3 "Content-Type: text/html \n\n";
#print DATA3 "<html><body>\n";
#print DATA3 "<p><h1 style=\"text-align:center\">Notes</h1></p>\n";
#print DATA2 "<p><h1 style=\"text-align:center\">Notes</h1></p>\n";

	my $textIndex = 0;
	foreach(@notes){
		if($_ eq "$add_note\n"){
			$_ = "x";
		}	 
		
	}

foreach(@notes){	
	if ($_  ne "x"){
		print DATA2 $_;
		#print DATA3 "<p><h2 style=\"text-align:center\">~ $_</h2></p>\n";
 		#print DATA3 "<br>";

	}
}
#print DATA3 "</body></html>";

close(DATA2);
}

#close(DATA3);


print  "<html><body>\n";

print "<p>Success!</p>\n";
print "<p><a href=\"/newNote.html\">Click Here For A New Entry</a></p>";
print  "</body></html>";
 


