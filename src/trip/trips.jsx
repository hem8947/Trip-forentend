import { Button } from "@/components/ui/button";
import { Card, CardAction, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Plus } from "lucide-react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import React from "react";
import { useNavigate } from "react-router-dom";
import useApi from "@/Hooks/useApi";

const Trips = () => {
  const navigate = useNavigate();

  const {data, error, loading} = useApi('/trips');

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <main className="px-20 py-8">
      <Card>
        <CardHeader className="flex items-center justify-between">
          <CardTitle className="flex items-center justify-between">My Trips</CardTitle>
          <CardDescription>
            View and manage the trips you have created.
          </CardDescription>
          <CardAction>
            <Button variant="outline" onClick={() => navigate("/trips/create")}>
              <Plus className="mr-2" />
              Create New Trip
            </Button>
          </CardAction>
        </CardHeader>

        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>S.N</TableHead>
                <TableHead>Title</TableHead>
                <TableHead>Location</TableHead>
                <TableHead>Price</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
          </Table>
          <TableBody>
            {data.map((trip, index) => {
              return (
                <TableRow key={trip._id}>
                  <TableCell>{index + 1}</TableCell>
                  <TableCell>{trip.title}</TableCell>
                  <TableCell>{trip.location}</TableCell>
                  <TableCell>${trip.price.toFixed(2)}</TableCell>
                  <TableCell>
                    <Button variant="outline" onClick={() => navigate(`/trips/${trip.id}`)}>
                      View Details
                    </Button>
                  </TableCell>
                </TableRow>
              );
            })
            }
          </TableBody>
        </CardContent>
      </Card>
    </main>
  );
};

export default Trips;
